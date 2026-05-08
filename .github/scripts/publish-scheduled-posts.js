const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

async function publishScheduledPosts() {
  const now = new Date().toISOString()

  console.log(`Checking for posts to publish at ${now}`)

  // Find all draft posts where publishedAt is in the past or today
  const drafts = await client.fetch(
    `*[_type == "post" && _id in path("drafts.**") && publishedAt <= $now]{
      _id,
      title,
      publishedAt
    }`,
    { now }
  )

  if (drafts.length === 0) {
    console.log('No posts scheduled for publishing today.')
    return
  }

  console.log(`Found ${drafts.length} post(s) to publish:`)

  for (const draft of drafts) {
    console.log(`Publishing: "${draft.title}" (scheduled: ${draft.publishedAt})`)

    // Get the draft ID without the "drafts." prefix
    const publishedId = draft._id.replace('drafts.', '')

    try {
      // Publish by creating/replacing the published version
      const draftDoc = await client.getDocument(draft._id)

      if (!draftDoc) {
        console.log(`Could not fetch draft document for ${draft._id}`)
        continue
      }

      // Remove draft-specific fields
      const { _id, _updatedAt, ...docWithoutMeta } = draftDoc

      // Create or update the published document
      await client
        .transaction()
        .createOrReplace({
          ...docWithoutMeta,
          _id: publishedId,
          _type: 'post',
        })
        .delete(draft._id)
        .commit()

      console.log(`Successfully published: "${draft.title}"`)
    } catch (err) {
      console.error(`Failed to publish "${draft.title}":`, err.message)
    }
  }

  console.log('Done.')
}

publishScheduledPosts().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})

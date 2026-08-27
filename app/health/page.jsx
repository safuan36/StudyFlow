export const metadata = {
  title: 'StudyFlow Health',
}

async function getHealthData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return {
      ok: true,
      data: await response.json(),
    }
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error.message,
    }
  }
}

export default async function HealthPage() {
  const result = await getHealthData()

  return (
    <main className="health-page">
      <h1>StudyFlow Health Check</h1>

      <p>
        Status:{' '}
        <strong>{result.ok ? 'Healthy' : 'Unhealthy'}</strong>
      </p>

      {result.ok ? (
        <section>
          <h2>Fetched data</h2>
          <pre>{JSON.stringify(result.data, null, 2)}</pre>
        </section>
      ) : (
        <section>
          <h2>Fetch failed</h2>
          <p>{result.error}</p>
        </section>
      )}
    </main>
  )
}
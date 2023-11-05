import Head from "next/head";
import useCallPalmApi from "./useCallPalmApi";

export default function CallPalmApiPage() {
  const { data, loading, error, callPalmApi } = useCallPalmApi();

  return (
    <div>
      <Head>
        <title>Call PaLM API Securely</title>
      </Head>

      <main>
        <h1>Call PaLM API Securely</h1>
        <button onClick={callPalmApi} disabled={loading}>
          Call API
        </button>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </main>
    </div>
  );
}

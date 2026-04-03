export async function onRequest(context) {
  const db = context.env.sql_web_app;
  if (db) {
    return new Response("✅ Success! Database is bound.");
  } else {
    return new Response("❌ Error: Binding not found.");
  }
}

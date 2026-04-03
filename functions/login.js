export async function onRequestPost(context) {
  const { request, env } = context;
  const { username, password } = await request.json();

  // We use "sql_web_app" because that is the Variable Name from Step 2
  const user = await env.sql_web_app.prepare(
    "SELECT * FROM Users WHERE username = ? AND password = ?"
  )
  .bind(username, password)
  .first();

  if (user) {
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } else {
    return new Response(JSON.stringify({ success: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
}

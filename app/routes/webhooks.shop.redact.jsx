import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { topic, shop } = await authenticate.webhook(request);
  console.log(`Received ${topic} webhook for ${shop}`);
  // This app does not store shop data beyond standard installation records,
  // which are removed automatically when the app is uninstalled.
  return new Response();
};
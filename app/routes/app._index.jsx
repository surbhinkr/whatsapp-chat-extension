import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <s-page heading="WhatsApp Chat Button">
      <s-banner tone="success" heading="You're all set up!">
        <s-paragraph>
          Your WhatsApp Chat Button is ready to configure. Follow the steps
          below to add it to your storefront.
        </s-paragraph>
      </s-banner>

      <s-section heading="How to enable your WhatsApp Chat Button">
        <s-ordered-list>
          <s-list-item>
            Go to <s-text weight="bold">Online Store → Themes</s-text> in
            your Shopify admin.
          </s-list-item>
          <s-list-item>
            Click <s-text weight="bold">Customize</s-text> on your active
            theme.
          </s-list-item>
          <s-list-item>
            In the theme editor, click{" "}
            <s-text weight="bold">App embeds</s-text> (puzzle-piece icon)
            in the left sidebar.
          </s-list-item>
          <s-list-item>
            Find <s-text weight="bold">WhatsApp Chat Button</s-text> and
            toggle it on.
          </s-list-item>
          <s-list-item>
            Enter your WhatsApp business number (with country code, no
            "+") and customize your greeting message, button color, size,
            and position.
          </s-list-item>
          <s-list-item>
            Click <s-text weight="bold">Save</s-text> in the theme editor.
            Your button will now appear on your storefront!
          </s-list-item>
        </s-ordered-list>
      </s-section>

      <s-section heading="Need help?">
        <s-paragraph>
          If your button doesn't appear after enabling it, try refreshing
          your storefront or clearing your browser cache.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
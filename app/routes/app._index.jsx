import { Page, Layout, Card, Text, BlockStack, Banner, List } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <Page>
      <TitleBar title="WhatsApp Chat Button" />
      <Layout>
        <Layout.Section>
          <Banner tone="success" title="You're all set up!">
            <p>
              Your WhatsApp Chat Button is ready to configure. Follow the
              steps below to add it to your storefront.
            </p>
          </Banner>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                How to enable your WhatsApp Chat Button
              </Text>
              <List type="number">
                <List.Item>
                  Go to <strong>Online Store → Themes</strong> in your
                  Shopify admin.
                </List.Item>
                <List.Item>
                  Click <strong>Customize</strong> on your active theme.
                </List.Item>
                <List.Item>
                  In the theme editor, click{" "}
                  <strong>App embeds</strong> (puzzle-piece icon) in the
                  left sidebar.
                </List.Item>
                <List.Item>
                  Find <strong>WhatsApp Chat Button</strong> and toggle it
                  on.
                </List.Item>
                <List.Item>
                  Enter your WhatsApp business number (with country code,
                  no "+") and customize your greeting message, button
                  color, size, and position.
                </List.Item>
                <List.Item>
                  Click <strong>Save</strong> in the theme editor. Your
                  button will now appear on your storefront!
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Need help?
              </Text>
              <Text as="p" variant="bodyMd">
                If your button doesn't appear after enabling it, try
                refreshing your storefront or clearing your browser cache.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
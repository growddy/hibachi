import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
    Hr,
  } from "@react-email/components";
  
  interface UserConfirmationEmailProps {
    firstName?: string;
  }
  
  const baseUrl = "https://dynamitehibachi.com";
  
  export const UserConfirmationEmail = ({ firstName }: UserConfirmationEmailProps) => (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Your message has been sent — we’ll reply within 24 hours</Preview>
  
        <Container style={container}>
          <Heading style={h1}>
            {firstName ? `Thanks, ${firstName}!` : "Thanks!"} We received your message.
          </Heading>
  
          <Text style={text}>
            This is a confirmation that your email has been successfully sent to the Dynamite Hibachi team.
          </Text>
  
          <Text style={text}>
            Please expect a reply within <strong>24 hours</strong>. If you shared event details, we’ll review them and
            follow up with next steps.
          </Text>
  
          <Hr style={hr} />
  
          <Text style={text}>
            You can visit our website here:
          </Text>
  
          <Link
            href={baseUrl}
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBottom: "16px",
            }}
          >
            {baseUrl}
          </Link>
  
          <Text style={text}>
            If you’d like to send another message or add more information, please use our contact page:
          </Text>
  
          <Link
            href={`${baseUrl}/contact`}
            target="_blank"
            style={{
              ...link,
              display: "block",
              marginBottom: "24px",
            }}
          >
            {`${baseUrl}/contact`}
          </Link>
  
          <Text style={footer}>
            <Link href={baseUrl} target="_blank" style={{ ...link, color: "#898989" }}>
              DynamiteHibachi.com
            </Link>
            <br />
            Private hibachi catering for birthdays, celebrations, and events.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  UserConfirmationEmail.PreviewProps = {
    firstName: "John",
  } as UserConfirmationEmailProps;
  
  export default UserConfirmationEmail;
  
  const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
    maxWidth: "600px",
  };
  
  const h1 = {
    color: "#111827",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "700",
    margin: "40px 0 16px",
    padding: "0",
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#111827",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "16px 0",
    lineHeight: "22px",
  };
  
  const hr = {
    borderColor: "#e5e7eb",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#898989",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px",
  };
  
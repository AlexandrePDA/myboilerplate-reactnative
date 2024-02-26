import { StyleSheet } from "react-native";
import type { CardProps } from "tamagui";
import { Button, Card, H2, Paragraph, XStack } from "tamagui";

export default function ListScreen() {
  return (
    <XStack
      $sm={{ flexDirection: "column" }}
      paddingHorizontal="$4"
      marginTop="$4"
      space
    >
      <DemoCard size="$5" width={"full"} height={150} />
    </XStack>
  );
}

export function DemoCard(props: CardProps) {
  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Welcome </H2>
        <Paragraph theme="alt2">@Tamagui</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">call to action</Button>
      </Card.Footer>
      <Card.Background></Card.Background>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

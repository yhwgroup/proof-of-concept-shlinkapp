import { Text, View } from "react-native";
import * as shl from "@shlinkio/shlink-js-sdk";

 
const sinfo = {
  baseUrl: "https://go.yuanhau.com",
  apiKey: process.env.shlink_api,
}
export const shlink = new shl.ShlinkApiClient(
  new FetchHttpClient(),
  sinfo
)
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

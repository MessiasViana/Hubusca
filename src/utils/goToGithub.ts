import { Linking } from "react-native";

const handlePressGoToGithub = async (urlGithub: string) => {

  const res = await Linking.canOpenURL(urlGithub);

  if (res) await Linking.openURL(urlGithub);
};

export default handlePressGoToGithub;
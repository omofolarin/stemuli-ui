// Overriding ant styles via ant themes was a lot of work.
// and I couldn't find a easy way to make it work without using legacy nextjs packages.
// so this a "suitable hack"
interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  outlineColor: string;
}

const theme: Theme = {
  primaryColor: "#494FB1",
  secondaryColor: "rgba(73, 79, 177, 0.08)",
  backgroundColor: "rgba(143, 146, 161, 0.28)",
  primaryTextColor: "#00000",
  secondaryTextColor: "#171717",
  outlineColor: "#ECEEF5",
};

export default theme;

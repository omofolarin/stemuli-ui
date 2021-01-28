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
  inputOutline: string;
}

const theme: Theme = {
  primaryColor: "#494FB1",
  secondaryColor: "rgba(73, 79, 177, 0.08)",
  backgroundColor: "rgba(143, 146, 161, 0.28)",
  primaryTextColor: "#00000",
  secondaryTextColor: "#171717",
  outlineColor: "#ECEEF5",
  inputOutline: "rgba(73.00, 80.00, 171.00, 0.26)",
};

export default theme;

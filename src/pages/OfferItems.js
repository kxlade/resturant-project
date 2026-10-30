import burger from "../assets/burger.avif";
import salad from "../assets/fresh-salad.webp";
import dessert from "../assets/desert.jpg";

const offerItems = [
    {
        title: "Lunch Combo",
        description: "A quick plate with a main, side, and drink for busy weekdays.",
        image: burger,
        availability: "Available now",
        availabilityTone: "available",
        details: "Best for fast lunch decisions and users who want one clean, complete meal.",
    },
    {
        title: "Fresh Balance Bowl",
        description: "A lighter option packed with greens, grains, and protein.",
        image: salad,
        availability: "Limited today",
        availabilityTone: "limited",
        details: "Good to highlight when users want something lighter or more health-focused.",
    },
    {
        title: "Sweet Finish",
        description: "Add dessert to any order and finish with something rich and comforting.",
        image: dessert,
        availability: "Sold out soon",
        availabilityTone: "soon",
        details: "Use this to push upsells and show what is running low before checkout.",
    },
];
export default offerItems;

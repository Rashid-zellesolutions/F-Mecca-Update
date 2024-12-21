export const url = `https://fm.skyhub.pk`
// export const url = `https://furniture-mecca-apis.vercel.app`


export function formatTime(stateName, timestamp) {
    const stateTimeZones = {
        "Pennsylvania": "America/New_York",
    };

    const timeZone = stateTimeZones[stateName];
    if (!timeZone) {
        return "Invalid state name or unsupported time zone.";
    }

    const date = new Date(timestamp);
    const now = new Date();

    // Adjust the date to the state's time zone
    const options = { timeZone, hour: "2-digit", minute: "2-digit", hour12: false };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedTime = formatter.format(date);

    // Calculate the difference in seconds
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 172800) {
        return "Yesterday";
    } else {
        return `Date: ${date.toLocaleDateString("en-US", { timeZone })}, Time: ${formattedTime}`;
    }
}


export const transformReviewData = (reviews) => {
    const result = [
        { count: 5, rev: 0 },
        { count: 4, rev: 0 },
        { count: 3, rev: 0 },
        { count: 2, rev: 0 },
        { count: 1, rev: 0 }
    ];

    // Loop through the reviews and count occurrences for each rating
    reviews?.forEach((review) => {
        if (review?.rating >= 1 && review?.rating <= 5) {
            // Find the matching count object based on rating and increment rev count
            result.forEach((item) => {
                if (item?.count === review.rating) {
                    item.rev += 1;
                }
            });
        }
    });

    console.log(result,"here is result",reviews)

    return result;
};

export const extractImagesFromReviews = (reviews) => {
    // Flatten the images from all reviews into a single array
    return reviews
        .map(review => review.images) // Extract the images field
        .flat() // Flatten the array of arrays into a single array
        .filter(image => image); // Ensure that empty values are removed
};

import Accordion from "./Accordian";

const FAQ = () => {
    return (
        <div className="p-0 text-2xl text-blue-500 mx-auto font-semibold rounded-lg md:w-[60%]">
            <Accordion
                title={"Is Profilze Free?"}
                answer={"Resume.io has a few different tools you can use 100% for free without entering any additional info"}
            />
            <hr />
            <Accordion
                title="How many Resume can i make?"
                answer="You can make unlimited number of resumes as its totally free of cost"
            />
            <hr />
            <Accordion title="Is there any privacy risk"
                answer="Not at all the data you enters will remain on your browser only no-one including us do not get even a single word" />

            <hr />
            <Accordion title="Will there be more Templates and Features?"
                answer="Of course as it is a kind of prototype further versions would have more advanced features for users for 100% free" />
            <hr />
      
        </div>
    );
}

export default FAQ;

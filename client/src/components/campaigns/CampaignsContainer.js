import { PiListPlusFill } from "react-icons/pi";
import { CampaignCard } from "./CampaignCard";

export const CampaignContainer = ({ campaigns }) => {
    return (
        <div className="flex-container">
            <button className="create-btn shadowed">
                <PiListPlusFill className="btn-create-icon" />
            </button>

            {campaigns.map((campaign) => (
                <CampaignCard
                // id={campaign.id}
                // title={campaign.title}
                // createdAt={campaign.createdAt}
                // editedAt={campaign.editedAt}
                // description={campaign.description}
                />
            ))}
        </div>
    );
};

// container of CampaignCards,
// on homepage (NoteManagerPage)

import { CampaignCard } from "./CampaignCard";

export const CampaignContainer = ({ campaigns }) => {
    return (
        <div>
            {campaigns.map((campaign) => (
                <CampaignCard
                // id={campaign.id}
                // title={campaign.title}
                // createdAt={campaign.createdAt}
                // editedAt={campaign.editedAt}
                // description={campaign.description}
                />
            ))}
            <button>+</button>
        </div>
    );
};

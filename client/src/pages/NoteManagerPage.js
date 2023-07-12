import { useState } from "react";
import { CampaignContainer } from "../components/campaigns/CampaignsContainer.js";

export const NoteManagerPage = () => {
    const [campaings, setCampaigns] = useState([1, 2, 3]);

    return (
        <div>
            <CampaignContainer campaigns={campaings} />
        </div>
    );
};

import { BsTrashFill } from "react-icons/bs";

export const CampaignCard = (
    {
        /*id, title, createdAt, editedAt, desc*/
    }
) => {
    return (
        <div>
            <div>
                <small>Edited: 2023/07/02</small>
                <small>Created: 2023/07/02</small>
                <button>
                    <BsTrashFill />
                </button>
            </div>

            <h2>Campaign Title</h2>
            <p>
                Nulla tincidunt pharetra tellus tempus porta. Integer vel lectus
                ex. In hac habitasse platea dictumst. Mauris venenatis convallis
                odio dignissim volutpat. In tincidunt non nisl nec vehicula.
                Nunc tincidunt scelerisque quam, at pellentesque risus vulputate
                vitae. Cras finibus turpis justo...
            </p>
        </div>
    );
};

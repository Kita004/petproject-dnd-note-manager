import { BsTrashFill } from "react-icons/bs";

export const CampaignCard = (
    {
        /*id, title, createdAt, editedAt, desc*/
    }
) => {
    return (
        <div className="card shadowed">
            <header className="card-header">
                <section className="flex-col-container">
                    <small>Edited: 2023/07/02</small>
                    <small>Created: 2023/07/02</small>
                </section>
                <button>
                    <BsTrashFill className="btn-trash-icon" />
                </button>
            </header>
            <h2>Campaign Title</h2>
            <p>Nulla tinciduinibus turpis justo...</p>
        </div>
    );
};

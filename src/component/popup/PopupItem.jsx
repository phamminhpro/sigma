function PopupItem({ title }) {
    return (
        <div className="w-full md:text-base">
            <label for={title}>
                {title}
                <span className="text-red-600"> *</span>
            </label>
            <input
                type="text"
                id={title}
                className="w-full border-[1px] border-solid rounded-lg border-[#CFD5E1] md:h-8"
                required
            />
        </div>
    );
}

export default PopupItem;

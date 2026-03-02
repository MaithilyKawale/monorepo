function CheckboxGroup({ label, options, value, onChange }) {
    const toggleValue = (item) => {
        if (value.includes(item)) {
            onChange(value.filter(v => v !== item));
        } else {
            onChange([...value, item]);
        }
    };

    return (
        <div className="input-field">
            <label>{label}</label>
            <div className="checkbox-group">
                {options.map(item => (
                    <label key={item}>
                        <input
                            type="checkbox"
                            checked={value.includes(item)}
                            onChange={() => toggleValue(item)}
                        />
                        {item}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default CheckboxGroup;

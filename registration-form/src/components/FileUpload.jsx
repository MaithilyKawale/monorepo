
function FileUpload({ label, onChange }) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type="file" onChange={e => onChange(e.target.files[0])} />
        </div>
    );
}

export default FileUpload;

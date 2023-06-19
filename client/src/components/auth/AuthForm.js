export const AuthForm = ({
    id,
    title,
    buttonText = "Submit",
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
}) => {
    return (
        <div className="auth-container">
            <form id={id} className={id} onSubmit={handleSubmit}>
                <h1>{title}</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id={"username" + title}
                        className="auth-input"
                        value={username}
                        placeholder="Username..."
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id={"password" + title}
                        className="auth-input"
                        value={password}
                        placeholder="****"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className="auth-form-btn" type="submit">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

function DeleteAccountCompleted() {
  return (
    <div className="flex w-full flex-col items-start text-left">
      <h1>Your Callover account has been deleted</h1>

      <p>
        Your account and the data associated with it are no longer available.
        You have also been signed out.
      </p>

      <a href="/" className="mt-4">
        Return home
      </a>
    </div>
  );
}

export default DeleteAccountCompleted;

# PRIVACY POLICY

Last updated: July 19, 2026

## 1. Who operates Callover

Callover is operated by Leonid Semenov, an individual developer based in the Kyrgyz Republic.

This Privacy Policy applies to Callover and its platform-specific versions, including applications presented as Callover Mobile, Callover Desktop, or similar Callover client names.

For privacy questions or requests, contact:

Email: [email@email.com](mailto:email@email.com)

In this Privacy Policy, “Callover,” “the Service,” “we,” “us,” and “our” refer to the Callover service operated by Leonid Semenov.

## 2. Scope of this Privacy Policy

This Privacy Policy explains how Callover collects, uses, stores, discloses, and deletes personal data when you:

Create or use a Callover account.

Use a Callover mobile or desktop application.

Make or receive audio or video calls.

Add another Callover account as a contact.

Use presence, blocking, notification, and call-history features.

Communicate with us by email.

Callover is a communication service intended only for people who are at least 18 years old.

## 3. Data we collect

### 3.1 Account data

When you create a Callover account, we collect and store:

Your username.

Your optional email address.

Your email-verification status.

Your internal Callover account ID.

Your account creation and modification timestamps.

A password hash.

Callover does not store your password in readable form. Your password is processed through password-hashing technology.

Providing an email address is optional unless a specific account or security function requires it.

### 3.2 Session and security data

When you sign in or use the Service, we may collect and store:

A hashed session identifier.

Your Callover account ID.

Your IP address.

Your device or application User-Agent.

Your last activity time.

Your session revocation status.

Your session expiration time.

A session identifier may also be stored on your device through a secure session cookie or an equivalent platform-specific secure storage mechanism. It is used to keep you signed in and authenticate requests.

Sessions currently expire after 30 days unless they are revoked or deleted earlier. Expired session records are configured for automatic deletion from MongoDB after their expiration time.

The session duration is a configurable Service setting. We will update this Privacy Policy if we make a material change to session retention.

### 3.3 Contact data

Callover does not read or upload contacts from your SIM card, mobile carrier, device address book, Google account, Apple account, or other applications.

Callover has its own internal contact system.

To add another person, you must already know that person’s Callover account ID. Accounts cannot be searched by username, email address, telephone number, or name.

When you create a Callover contact, we may store:

Your account ID.

The other person’s account ID.

A contact name or alias selected by you.

A private note written by you.

Whether you marked the contact as a favourite.

Whether you muted the contact.

Whether you blocked the contact.

Creation and modification timestamps.

The alias and note are created by the contact owner. They are not profile information supplied by the other user.

### 3.4 Presence information

Callover processes presence information so permitted contacts can determine whether a user is currently available through the Service.

A person may see your presence state when:

They know your Callover account ID.

They have added your account as a Callover contact.

You have not blocked them.

Your username and optional email address are not made visible to other users through the contact system.

Blocking a user prevents that user from calling you, viewing your presence state, or otherwise interacting with you through supported Callover features.

Presence information may be treated as visible account information within the Callover contact system. Do not share your Callover account ID with people whom you do not want to contact you.

Temporary presence subscriptions, online status, socket associations, and current call state may be processed through Redis. This data is used for real-time operation and is not intended as permanent account history.

### 3.5 Call metadata

Callover stores call-history metadata. This may include:

Call ID.

Your account ID.

The other participant’s account ID.

A stored peer name, when available.

Call start time.

Call answer time.

Call end time.

Whether the call was incoming or outgoing.

Whether the call was an audio or video call.

Whether the call was completed, missed, declined, cancelled, unanswered, or failed.

Call duration.

Ringing duration.

Call-history metadata is stored until the relevant Callover account is deleted, unless deletion is required earlier by law or a technical operation.

### 3.6 Audio and video data

Callover uses WebRTC for audio and video calls.

Callover’s application server handles call signalling. The application server does not receive or store your audio or video tracks as account content.

Callover does not:

Record calls.

Store audio or video call content.

Create call transcripts.

Listen to or analyse call content.

Perform voice recognition.

Perform facial recognition.

Use call content for advertising, analytics, or profiling.

WebRTC encrypts call media while it is transported using WebRTC security protocols. We do not describe Callover calls as independently end-to-end encrypted because Callover does not provide or verify a separate application-level end-to-end encryption protocol.

When a direct peer-to-peer connection cannot be established, a TURN relay may transport encrypted WebRTC traffic. Callover may use a TURN server hosted through Timeweb Cloud or another disclosed infrastructure provider for this purpose.

A TURN relay transports call traffic but is not intended to record or retain audio or video content.

### 3.7 IP-address disclosure during WebRTC calls

WebRTC connection establishment uses network information called ICE candidates.

Depending on the operating system, network, WebRTC implementation, and connection type, a call participant may learn an IP address or other network-addressing information associated with the other participant.

This can include public, private, relay, or network-interface addressing information.

By starting or accepting a Callover call, you understand that WebRTC may disclose network-addressing information to the other call participant as technically necessary to establish the connection.

### 3.8 Notifications

Callover may create and store:

Missed-call notifications.

Muted-call notifications.

Service notifications.

Notification read or unread status.

Sender account IDs.

A contact name known to the recipient.

Call IDs.

Audio or video call type.

Creation timestamps.

Reading timestamps.

Expiration timestamps.

Server-side notifications are retained for a limited, configurable period needed to deliver and display them. They are deleted from the server after their configured expiration time or when the associated account is deleted.

After notifications, contacts, or call logs have been downloaded to a device, cached copies may remain in that application’s local storage. These local copies may remain until:

You sign out.

You delete your account.

You clear the application’s data.

You uninstall the application.

The application removes or replaces the cached data.

The exact local behaviour may vary by platform.

### 3.9 Push-notification data

Callover uses:

Firebase Cloud Messaging for supported Android push notifications.

Apple Push Notification service for supported Apple-platform push notifications.

To provide push notifications, Callover may process:

A push-notification token.

The device platform.

The notification provider.

The application identifier.

The application version.

The notification environment.

Token activation or invalidation information.

A push-notification payload may include information necessary to identify and display the event, such as:

A Callover account ID.

Call type.

Call ID.

A contact name already known to the notification recipient.

Other limited public or operational account information required for notification delivery.

Google and Apple process push-notification data as independent platform providers or service providers under their own terms and privacy policies.

### 3.10 Local application data

Callover clients may use platform storage, including Android SharedPreferences, encrypted preferences, secure storage, databases, or equivalent platform facilities.

Local data may include:

Application preferences.

Session credentials.

Cached contacts.

Cached contact aliases and notes.

Cached notifications.

Cached call logs.

Presence state.

Other data needed to operate the application.

Callover does not request broad storage or media-file access for managing user files. Callover does not upload or manage personal photos, videos, documents, music, downloads, or other general files stored on your device.

### 3.11 Device permissions

Depending on the platform and enabled calling features, Callover may request access to:

Microphone, for audio calls.

Camera, for video calls.

Notifications, for incoming calls and service information.

Bluetooth or nearby-device functions, for supported audio devices.

Foreground-service capabilities, to maintain active or incoming call functionality.

Telephone or telecom integration, where supported by the operating system.

Phone state, where required for call coordination.

Callover requests these permissions only for communication and application functionality.

Callover does not use these permissions to access your carrier contacts, device address book, SIM contacts, unrelated telephone records, or data belonging to other applications.

### 3.12 Emails

Your email address is optional.

When you provide an email address, Callover may use it for:

Email verification.

Account or security messages.

Important service notices.

Changes that materially affect the Service.

Privacy or legal notices.

Callover does not use your email address for third-party advertising.

Callover does not sell email addresses.

## 4. Data we do not collect through Callover SDKs

Callover does not integrate:

Firebase Analytics.

Firebase Crashlytics.

Google Analytics.

Sentry.

Datadog.

New Relic.

Amplitude.

Mixpanel.

Advertising SDKs.

Advertising-attribution SDKs.

Cross-application tracking SDKs.

Callover does not use telemetry or behavioural analytics SDKs.

The Google Play platform and the operating system may independently collect crash, installation, security, performance, and diagnostic information under their own terms. Google may make some diagnostic information available to the developer through Google Play Console.

This platform collection is performed by Google or the operating system. Callover does not embed a separate crash-reporting SDK to collect this information directly.

## 5. No messaging or user-content storage

Callover does not currently provide direct messaging, text chat, file sharing, message attachments, public posts, comments, or social feeds.

Callover therefore does not store message content or shared media content.

## 6. How we use personal data

We use personal data to:

Create and maintain your account.

Authenticate sessions.

Provide audio and video calling.

Connect calls through WebRTC signalling.

Provide presence information to permitted contacts.

Maintain contact preferences.

Enforce blocking and muting settings.

Create and display call history.

Deliver incoming-call and service notifications.

Send account, security, and essential service emails.

Prevent unauthorized access and abuse.

Investigate technical and security incidents.

Maintain the reliability and security of the Service.

Comply with applicable legal obligations.

Process account-deletion and privacy requests.

We do not use personal data for advertising.

We do not build advertising profiles.

We do not use personal data for automated decisions that produce legal or similarly significant effects.

## 7. Legal bases for users in the EEA and United Kingdom

Where the European Economic Area General Data Protection Regulation or United Kingdom General Data Protection Regulation applies, we process personal data under the following legal bases.

### 7.1 Performance of a contract

We process account, session, contact, presence, calling, notification, and call-history data when processing is necessary to provide the Callover service you requested.

### 7.2 Legitimate interests

We may process IP addresses, User-Agent information, security events, operational logs, and limited service information where necessary for our legitimate interests in:

Protecting accounts.

Preventing misuse.

Maintaining service security.

Diagnosing technical failures.

Operating a reliable communication service.

We consider the effects of this processing on your privacy and limit it to what is reasonably necessary.

### 7.3 Legal obligations

We may process or disclose information where necessary to comply with applicable law, a legally valid court order, or another binding legal requirement.

### 7.4 Consent

Where applicable law requires consent for a specific permission, optional feature, or type of communication, we request consent before using that feature.

You may withdraw consent through your device settings, application settings, or by contacting us. Withdrawal does not affect processing that was lawful before withdrawal.

## 8. How we disclose data

We do not sell personal data.

We do not rent personal data.

We do not share personal data for targeted advertising or cross-context behavioural advertising.

We may disclose limited data in the following circumstances.

### 8.1 Other Callover users

Another user may receive information necessary to provide Callover functionality, including:

Your account ID when it is already known to that person.

Your presence state when permitted.

Call signalling information.

Call type and status.

Network-addressing information exposed through WebRTC.

Information required to identify an incoming or previous call.

The other user does not receive your optional email address or password hash.

### 8.2 Infrastructure and service providers

We use providers that process data to operate Callover. These may include:

Render, for application-server hosting.

Cloudflare, for network delivery, security, proxying, and related infrastructure.

MongoDB Atlas, for database hosting.

A hosted Redis provider, for temporary real-time state.

Timeweb Cloud, when used to host TURN relay infrastructure.

Google Firebase Cloud Messaging, for Android push notifications.

Apple Push Notification service, for Apple-platform push notifications.

Google Play, for application distribution and platform diagnostics.

These providers may process IP addresses, device information, request data, operational logs, database records, push tokens, or other limited information necessary to provide their services.

They may retain technical logs under their own retention periods and policies. We do not control every infrastructure log independently created by these providers.

### 8.3 Legal and safety requirements

We may disclose information where we reasonably believe disclosure is required to:

Comply with applicable law.

Respond to a legally binding request.

Protect the security of Callover.

Investigate abuse, fraud, or unauthorized access.

Protect the rights and safety of users or other people.

We will not voluntarily disclose private information to government authorities without a valid legal basis.

## 9. International data transfers

Leonid Semenov operates Callover from the Kyrgyz Republic.

Callover infrastructure providers may process data in the United States, the European Economic Area, the United Kingdom, the Kyrgyz Republic, or other countries where they operate infrastructure.

These countries may have data-protection laws different from those in your country.

Where EEA or UK data-protection law applies, we take reasonable steps to use appropriate safeguards for international transfers where legally required. These may include provider contractual protections, standard contractual clauses, or another legally recognized transfer mechanism.

## 10. Data retention

We retain data according to the following general periods.

Account data is retained while your account exists.

Session records normally expire after 30 days and are configured for automatic deletion after expiration. Sessions may be revoked or deleted earlier.

Contact records owned by you are retained until you remove them or delete your account.

Temporary presence and call-state information is retained only while required for real-time service operation.

Call-history metadata is retained until account deletion.

Server notifications are retained for a limited configurable period and are deleted after expiration or account deletion.

Push tokens are retained while needed for notification delivery and are deleted or invalidated when no longer valid, when you sign out where supported, or when your account is deleted.

Local cached data may remain on a device until logout, account deletion, application-data clearing, cache replacement, or uninstallation.

Infrastructure providers may retain security and request logs according to their own operational retention schedules.

We may retain limited information for longer only where required by applicable law, a valid legal claim, fraud prevention, or security investigation. When no exception applies, account-associated data controlled by Callover is deleted after account deletion.

## 11. Account deletion

You may permanently delete your Callover account from within the application.

Callover will also provide a public web page containing instructions or a mechanism for requesting account deletion without using the application.

When your account is deleted, Callover deletes the account-associated data controlled by Callover, including:

Your account record.

Your password hash.

Your optional email address.

Your sessions.

Your contact records.

Your call logs.

Your notifications.

Your push tokens.

Your temporary presence information.

Your active or pending call state.

Other account-specific records controlled by Callover.

Account deletion is permanent. A deleted account cannot be restored by Callover support.

Deleting the application from your device does not by itself delete your Callover account. You must use the account-deletion function or the external deletion process.

## 12. Information that may remain with other users

Deleting your account does not automatically delete information independently created, stored, or controlled as part of another user’s account.

For example, another person may retain:

Their contact record referring to your former account.

An alias they assigned to you.

A private note they wrote.

Their favourite, mute, or block preferences.

Their copy of call-history metadata involving your former account.

Their copy of notifications relating to previous calls.

Locally cached information on their device.

These records may contain an obsolete reference to your deleted Callover account ID. The deleted account cannot be used to sign in, receive calls, or restore the deleted account.

Information owned by another user remains subject to that user’s deletion actions and the normal retention rules of their account.

## 13. Backups

Callover does not intentionally create or maintain separate developer-controlled backups of the production database.

MongoDB Atlas and other infrastructure providers may maintain internal redundancy, snapshots, recovery systems, or temporary copies as part of their infrastructure services.

Deleted data may remain temporarily in provider-controlled recovery systems until it is overwritten or removed through the provider’s normal retention cycle.

We do not use provider recovery systems to recreate a deleted Callover account.

## 14. Security

We use reasonable technical and organizational measures designed to protect personal data.

These measures include:

Password hashing.

Hashed server-side session identifiers.

Session expiration and revocation.

Secure session cookies or platform secure storage.

Encrypted HTTPS and WebSocket network connections where supported.

WebRTC transport encryption for audio and video.

Access controls for server infrastructure.

Separation between account credentials and public contact functions.

Blocking controls.

Automatic expiration for sessions and temporary notifications.

No method of electronic transmission or storage is completely secure. We cannot guarantee absolute security.

You are responsible for protecting your password, device access, email account, and Callover account ID.

## 15. Your privacy rights

Depending on your country, you may have the right to:

Request access to your personal data.

Correct inaccurate personal data.

Delete your account and associated data.

Restrict certain processing.

Object to processing based on legitimate interests.

Receive certain data in a portable format.

Withdraw consent where processing depends on consent.

Complain to a data-protection authority.

To exercise a privacy right, contact:

[email@email.com](mailto:email@email.com)

We may need to verify that you control the relevant account before fulfilling a request.

## 16. EEA and UK complaints

Users in the European Economic Area may submit a complaint to the data-protection authority in the country where they live, work, or believe an infringement occurred.

Users in the United Kingdom may submit a complaint to the UK Information Commissioner’s Office.

We encourage you to contact us first so we can review and respond to your concern.

## 17. Age restriction

Callover is intended only for users who are at least 18 years old.

You must not create or use a Callover account if you are under 18.

We do not knowingly collect personal data from children. If we learn that a person under 18 has created an account, we may delete the account and associated data.

A parent, guardian, or other person may report a suspected underage account by contacting [email@email.com](mailto:email@email.com).

## 18. Free service and payments

Callover is provided without subscription fees, in-app purchases, paid content, or paid communication features.

Callover does not collect or process payment-card, billing, or purchase information.

## 19. No advertising or sale of data

Callover does not display third-party advertising.

Callover does not use advertising identifiers.

Callover does not sell personal data.

Callover does not rent personal data.

Callover does not disclose personal data to data brokers.

Callover does not use personal data for targeted advertising.

Callover does not use account activity to create commercial advertising profiles.

## 20. Changes to this Privacy Policy

We may update this Privacy Policy when:

Callover features change.

Our data practices change.

Infrastructure providers change.

Legal requirements change.

Security or retention practices change.

We will publish the updated Privacy Policy and revise the “Last updated” date.

Where required, we will provide an in-app, email, or other appropriate notice before a material change takes effect.

Your continued use of Callover after an update takes effect is subject to the updated Privacy Policy, except where applicable law requires additional consent.

## 21. Contact

Data controller:

Leonid Semenov
Individual developer of Callover
Kyrgyz Republic

Privacy contact:

[email@email.com](mailto:email@email.com)

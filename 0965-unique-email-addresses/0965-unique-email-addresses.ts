function numUniqueEmails(emails: string[]): number {
    let unique: Set<string> = new Set();

    for (const email of emails) {
        const [localName, domain] = email.split("@");
        unique.add(`${localName.split("+")[0].replaceAll(".", "")}@${domain}`)
    }

    return unique.size
};
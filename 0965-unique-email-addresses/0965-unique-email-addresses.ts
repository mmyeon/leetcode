function numUniqueEmails(emails: string[]): number {
    let unique: Record<string, Set<string>> = {}
    // let emailNumber = 0;

    for (const email of emails) {
        const [localName, domain] = email.split("@");
        const processedLocalName = localName.split("+")[0].split(".").join("")

        if (!unique[domain]) {
            unique[domain] = new Set([processedLocalName])
        } else {
            unique[domain].add(processedLocalName)
        }

    }

    return Object.values(unique).reduce((sum, set) => sum + set.size, 0)
};
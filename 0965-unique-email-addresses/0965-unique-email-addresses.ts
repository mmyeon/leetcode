function numUniqueEmails(emails: string[]): number {
    let unique: Record<string, Set<string>> = {}
    let emailNumber = 0;

    for (let i = 0; i < emails.length; i++) {
        const arr = emails[i].split("@");
        const localName = arr[0].split("+")[0].split(".").join("")
        const domain = arr[1]

        if (!unique[domain]) {
            unique[domain] = new Set([localName])
        } else {
            unique[domain].add(localName)
        }

    }

    Object.values(unique).map(item => emailNumber += item.size)

    return emailNumber
};
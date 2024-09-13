function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    const traversing = new Set();
    const visited = new Set();

    const dfs = (course: number): boolean => {
        if (traversing.has(course)) return false;
        if (visited.has(course)) return true;

        traversing.add(course)

        for (const nextCourse of graph[course]) {
            if (!dfs(nextCourse)) return false;
        }

        traversing.delete(course)
        visited.add(course)

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
}


export async function fetchConversations(api, start = 0, limit = 20) {
    let count = 0;
    const { data: conversations, headers } = await api.get(`/api/conversations?_start=${start}&_limit=${limit}`);
    if ('X-Total-Count' in headers) {
        count = parseInt(headers['X-Total-Count'] ?? '0');
    }
    return { conversations, count };
}
//# sourceMappingURL=conversations.js.map
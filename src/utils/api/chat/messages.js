export async function fetchMessages(api, conversationId, start = 0, limit = 20) {
    let count = 0;
    const { data: messages, headers } = await api.get(`/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`);
    if ('X-Total-Count' in headers) {
        count = parseInt(headers['X-Total-Count'] ?? '0');
    }
    return { messages, count };
}
//# sourceMappingURL=messages.js.map
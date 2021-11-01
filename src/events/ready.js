module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`✅ - Estou online em ${client.user.tag}!`);
        client.user.setActivity({ type: "LISTENING", name: "j!help" });
    }
}
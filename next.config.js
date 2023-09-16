module.exports = {
    async headers() {
        return [
            {
                source: "/fonts/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                ],
            },
        ];
    },
};

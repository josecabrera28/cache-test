const axios = require('axios');
const _ = require('lodash');
const dayjs = require('dayjs');

(async () => {
    console.log('🧠 Node Cache Test Project');
    console.log('Current time:', dayjs().format('YYYY-MM-DD HH:mm:ss'));

    try {
        const { data } = await axios.get('https://api.github.com/repos/nodejs/node');
        console.log('📦 Repo info:');
        console.log(_.pick(data, ['name', 'stargazers_count', 'language']));
    } catch (error) {
        console.error('❌ Error fetching repo info:', error.message);
    }
})();

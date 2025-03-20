import express from 'express';
import { Queue } from 'bullmq';

const app = express();
// const queue = new Queue('scraper-jobs', { connection: { host: 'some-redis', port: 6379 } });

app.get('/queue-length', async (req, res) => {
 //const job = await queue.count();
    const jobCount = 10
  //  console.log(job)

    res.json({ length: jobCount });
});

app.listen(3000, () => console.log('Metrics server running on port 3000'));

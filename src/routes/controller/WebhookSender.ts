import * as express from 'express';
const router = express.Router();
import * as webhookManager from '../../client/WebhookManager';

router.get('/', (req, res) => {
    res.status(200).render('index.ejs');
});

router.post('/send', async (req, res) => {
    try {
        webhookManager.sendMessage(req.body.webhook, req.body)
    } catch (e) {
        res.send("<script>alert('Não foi possível enviar a mensagem, verifique a URL do Webhook');window.location.href='/'</script>")
    }
});
module.exports = router;
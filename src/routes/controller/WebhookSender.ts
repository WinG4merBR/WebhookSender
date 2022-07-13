import * as express from 'express';
const router = express.Router();
import * as webhookManager from '../../client/WebhookManager';

router.get('/', (req, res) => {
    res.status(200).render('index.ejs');
});

router.post('/send', async (req, res) => {
    try {
        if (!req.body.avatar.startsWith("http" || "https")) return res.send("<script>alert('O avatar precisa começar com HTTP ou HTTPS');window.location.href='/'</script>")
        await webhookManager.sendMessage(req.body.webhook, req.body);
        res.redirect("/");
    } catch (e) {
        res.send("<script>alert('Não foi possível enviar a mensagem, verifique a URL do Webhook');window.location.href='/'</script>")
    }
});
module.exports = router;
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class envioEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(\stdClass $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->from('viniciusm.gc27@gmail.com', 'Vinicius');
        $this->subject('Gerenciador de atividades');
        $this->to($this->user->email, $this->user->nome);

        return $this->markdown('mail.envioEmail', ['user' => $this->user]);
    }
}

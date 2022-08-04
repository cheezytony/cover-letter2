import { SectionInterface } from '../types';

const sections: SectionInterface[] = [
  { id: '1', content: 'Dear #recipient,', size: 'lg', type: 'salutation' },
  {
    id: '2',
    content:
      "I'm applying for the #target_position position, which I saw advertised on a #referrer.\nI believe I meet all the essential criteria for the role and feel I can make an effective and immediate contribution to your team.",
    size: 'md',
    type: 'opener',
  },
  {
    id: '3',
    content:
      'In my #current_position position with #current_company, I handled tasks very similar to what you outlined in your job ad. With my ability to learn, I know I can quickly close any knowledge gaps to become an asset to your team.',
    size: 'md',
    type: 'body',
  },
  {
    id: '4',
    content:
      'I have effective communication skills and the motivation to take on challenging work.\nI am confident that I have the drive, knowledge and experience you need.',
    size: 'md',
    type: 'body',
  },
  {
    id: '5',
    content:
      'Thank you for your time. It would be a pleasure to speak with you and discuss\nthis opportunity with #target_company. I look forward to hearing from you soon.',
    size: 'md',
    type: 'closer',
  },
  {
    id: '6',
    content: 'Sincerely.\nAntonio Okoro.',
    size: 'md',
    type: 'signature',
  },
];

export default sections;

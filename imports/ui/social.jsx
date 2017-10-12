import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

import exampleImage from './react-share-pin-example.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

class SocialBar extends Component {
	render() {
		return (
			<div className='social-container'>
				<div className='social-single'>
					<FacebookShareButton
						url={'https://google.com'}
						quote={'Find your cause with The Bridge Project.'}
						className='social-btn'>
						<FacebookIcon
							size={32}
							round />
					</FacebookShareButton>
					<FacebookShareCount
						url={'https://google.com'}
						className='social-count'>
						{count => count}
					</FacebookShareCount>
				</div>
				<div className='social-single'>
					<TwitterShareButton
						url={'https://google.com'}
						quote={'Find your cause with The Bridge Project.'}
						className='social-btn'>
						<TwitterIcon
							size={32}
							round />
					</TwitterShareButton>
					<TwitterShareCount
						url={'https://google.com'}
						className='social-count'>
						{count => count}
					</TwitterShareCount>
				</div>
				<div className='social-single'>
					<EmailShareButton
						url={'https://google.com'}
						subject={'Find your cause with The Bridge Project.'}
						className='social-btn'>
						<EmailIcon
							size={32}
							round />
					</EmailShareButton>
				</div>
			</div>
		);
	}
}


export default SocialBar

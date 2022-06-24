gsap.registerPlugin(ScrollTrigger);

gsap.to ('div.about1-title', {
	scrollTrigger: {
		trigger: 'div.about1-title',
		toggleActions: 'restart pause restart pause'
	},
	x:30,
	duration: 2,
	delay: 0.5
})

gsap.to ('div.about1-description', {
	scrollTrigger: {
		trigger: 'div.about1-title',
		toggleActions: 'restart pause restart pause'
	},
	x:30,
	duration: 2,
	delay: 1
})

gsap.to ('div.pic2', {
	scrollTrigger: {
		trigger: 'div.pic2',
		toggleActions: 'restart pause restart pause'
	},
	y:20,
	duration: 1,
	delay: 0.5
})

gsap.to ('div.pic3', {
	scrollTrigger: {
		trigger: 'div.pic3',
		toggleActions: 'restart pause restart pause'
	},
	y:20,
	duration: 1,
	delay: 1
})

gsap.to ('div.pic4', {
	scrollTrigger: {
		trigger: 'div.pic4',
		toggleActions: 'restart pause restart pause'
	},
	y:20,
	duration: 1,
	delay: 1.5
})

gsap.to ('div.about2-title', {
	scrollTrigger: {
		trigger: 'div.about2-title',
		toggleActions: 'restart pause restart pause'
	},
	x:-20,
	duration: 1,
	delay: 0.5
})

gsap.to ('div.about2-description', {
	scrollTrigger: {
		trigger: 'div.about2-description',
		toggleActions: 'restart pause restart pause'
	},
	x:-20,
	duration: 1,
	delay: 1
})
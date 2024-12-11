import React, { useEffect } from 'react';
import './google.css';

const GoogleTranslate = () => {
	useEffect(() => {
		const addGoogleTranslateScript = () => {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src =
				'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
			script.async = true;
			document.body.appendChild(script);

			(window as any).googleTranslateElementInit = () => {
				new (window as any).google.translate.TranslateElement(
					{ pageLanguage: 'en' },
					'google_translate_element'
				);

				const ensureEnglishOption = () => {
					const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
					if (selectElement) {
						const hasEnglish = Array.from(selectElement.options).some(
							(option) => option.textContent?.trim() === 'English'
						);

						if (!hasEnglish) {
							const englishOption = document.createElement('option');
							englishOption.value = 'en';
							englishOption.textContent = 'English';
							selectElement.insertBefore(englishOption, selectElement.firstChild);
						}
					} else {
						setTimeout(ensureEnglishOption, 500);
					}
				};

				const filterLanguages = () => {
					const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
					if (selectElement) {
						Array.from(selectElement.options).forEach((option) => {
							const languageText = option.textContent?.trim();
							if (languageText !== 'English' && languageText !== 'Français') {
								option.style.display = 'none';
							}
						});
					} else {
						setTimeout(filterLanguages, 500);
					}
				};

				const monitorDropdown = () => {
					const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
					if (selectElement) {
						// Listen for changes to the dropdown and reapply filtering
						selectElement.addEventListener('change', () => {
							setTimeout(() => {
								ensureEnglishOption();
								filterLanguages();
							}, 500); // Small delay to ensure dropdown updates
						});
					} else {
						setTimeout(monitorDropdown, 500);
					}
				};

				// Ensure English is included, filter languages, and monitor changes
				setTimeout(() => {
					ensureEnglishOption();
					filterLanguages();
					monitorDropdown();
				}, 1000);
			};
		};

		addGoogleTranslateScript();
	}, []);

	return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;

module.exports = {
    ra: {
        action: {
            add_filter: 'Lisää suodatin',
            add: 'Lisää',
            back: 'Takaisin',
            bulk_actions: '%{smart_count} valittu',
            cancel: 'Peruuta',
            clear_input_value: 'Tyhjennä',
            clone: 'Kopioi',
            create: 'Uusi',
            delete: 'Poista',
            edit: 'Muokkaa',
            export: 'Vie',
            list: 'Lista',
            refresh: 'Päivitä',
            remove_filter: 'Poista suodatin',
            remove: 'Poista',
            save: 'Tallenna',
            show: 'Näytä',
            sort: 'Järjestä',
            undo: 'Kumoa',
        },
        boolean: {
            true: 'Kyllä',
            false: 'Ei',
        },
        page: {
            create: 'Luo %{name}',
            dashboard: 'Työpöytä',
            edit: '%{name} #%{id}',
            error: 'Jotain meni pieleen',
            list: '%{name} -lista',
            loading: 'Ladataan',
            not_found: 'Ei löytynyt',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:'Pudota tiedostoja tai klikkaa valitaksesi.',
                upload_single: 'Pudota tiedosto tai klikkaa valitaksesi.',
            },
            image: {
                upload_several: 'Pudota kuvia ta klikkaa valitaksesi.',
                upload_single: 'Pudota kuva tai klikkaa valitaksesi.',
            },
            references: {
                all_missing: 'Viittauksen tietoja ei löydetty.',
                many_missing: 'Vähintään yksi viittauksista ei ole saatavilla.',
                single_missing: 'Viittaus ei ole saatavilla.',
            },
        },
        message: {
            about: 'Tietoja',
            are_you_sure: 'Oletko varma?',
            bulk_delete_content:
                'Oletko varma, että ${name} poistetaan? |||| Oletko varma että haluat poistaa %{smart_count} kohdetta?',
            bulk_delete_title:
                'Poista %{name} |||| Poista %{smart_count} %{name} kohdetta',
            delete_content: 'Oletko varma, että haluat poistaa tämän kohteen?',
            delete_title: 'Poista %{name} #%{id}',
            details: 'Yksityiskohdat',
            error: 'Ongelma havaittu eikä pyyntöäsi pystytty suorittamaan.',
            invalid_form: 'Lomake ei täytä vaatimuksia. Tarkista virheet.',
            loading: 'Sivua ladataan, ole hyvä ja odota hetki',
            no: 'Ei',
            not_found:
                'Kirjoitit viallisen osoitteen tai seurasit viallista linkkiä.',
            yes: 'Kyllä',
        },
        navigation: {
            no_results: 'Yhtään kohdetta ei löytynyt',
            no_more_results:
                'Sivu %{page} ylittää tulostin määrän. Yritä edellistä sivua.',
            page_out_of_boundaries: 'Sivu %{page} on rajojen ulkopuolella',
            page_out_from_end: 'Olet jo viimeisellä sivulla',
            page_out_from_begin: 'Olet jo ensimmäisellä sivulla',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            next: 'Seuraava',
            prev: 'Edellinen',
        },
        auth: {
            username: 'Käyttäjätunnus',
            password: 'Salasana',
            sign_in: 'Kirjaudu sisään',
            sign_in_error:
                'Kirjautuminen epäonnistui, ole hyvä ja yritä uudelleen',
            logout: 'Kirjaudu ulos',
        },
        notification: {
            updated:
                'Kohde päivitetty |||| %{smart_count} kohdetta päivitetty',
            created: 'Kohde luotu',
            deleted: 'Kohde poistettu |||| %{smart_count} kohdetta poistettu',
            bad_item: 'Virheellinen kohde',
            item_doesnt_exist: 'Kohdetta ei ole olemassa',
            http_error: 'Virhe palvelimelle yhdistettäessä',
            data_provider_error:
                'dataProvider virhe. Tarkista console lisätietojen saamiseksi.',
            canceled: 'Toiminta peruutettu',
        },
        validation: {
            required: 'Pakollinen',
            minLength: 'Vaadittu vähintään %{min} merkkiä pitkä',
            maxLength: 'Sallittu enintään %{max} merkkiä pitkä',
            minValue: 'Pienin sallittu numero on %{min}',
            maxValue: 'Suurin sallittu numero on %{max}',
            number: 'On oltava numero',
            email: 'Sähköpostin täytyy olla kelvollinen',
            oneOf: 'Valinnan on oltava joku seuraavista: %{options}',
            regex: 'Sisällön on täsmättävä regexp:iin: %{pattern}',
        },
    },
};

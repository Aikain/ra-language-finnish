import { TranslationMessages } from 'ra-core';

const finnishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Lisää suodatin',
            add: 'Lisää',
            back: 'Takaisin',
            bulk_actions: '%{smart_count} valittu',
            cancel: 'Peruuta',
            clear_array_input: 'Tyhjennä lista',
            clear_input_value: 'Tyhjennä',
            clone: 'Kopioi',
            confirm: 'Vahvista',
            create: 'Uusi',
            create_item: 'Uusi %{item}',
            delete: 'Poista',
            edit: 'Muokkaa',
            export: 'Vie',
            list: 'Lista',
            refresh: 'Päivitä',
            remove_filter: 'Poista suodatin',
            remove_all_filters: 'Poista kaikki suodattimet',
            remove: 'Poista',
            save: 'Tallenna',
            search: 'Etsi',
            select_all: 'Valitse kaikki',
            select_row: 'Valitse tämä rivi',
            show: 'Näytä',
            sort: 'Järjestä',
            undo: 'Kumoa',
            unselect: 'Poista valinnat',
            expand: 'Laajenna',
            close: 'Sulje',
            open_menu: 'Avaa valikko',
            close_menu: 'Sulje valikko',
            update: 'Päivitä',
            move_up: 'Siirrä ylös',
            move_down: 'Siirrä alas',
            open: 'Avaa',
            toggle_theme: 'Vaihda teema',
            select_columns: 'Sarakkeet',
            update_application: 'Päivitä sovellus',
        },
        boolean: {
            true: 'Kyllä',
            false: 'Ei',
            null: '',
        },
        page: {
            create: 'Luo %{name}',
            dashboard: 'Työpöytä',
            edit: '%{name} %{recordRepresentation}',
            error: 'Jotain meni pieleen',
            list: '%{name} -lista',
            loading: 'Ladataan',
            not_found: 'Ei löytynyt',
            show: '%{name} %{recordRepresentation}',
            empty: 'Kohteessa %{name} ei ole sisältöä.',
            invite: 'Haluako lisätä ensimmäisen?',
            access_denied: 'Pääsy estetty',
            authentication_error: 'Autentikointivirhe',
        },
        input: {
            file: {
                upload_several: 'Pudota tiedostoja tai klikkaa valitaksesi.',
                upload_single: 'Pudota tiedosto tai klikkaa valitaksesi.',
            },
            image: {
                upload_several: 'Pudota kuvia tai klikkaa valitaksesi.',
                upload_single: 'Pudota kuva tai klikkaa valitaksesi.',
            },
            password: {
                toggle_hidden: 'Näytä salasana',
                toggle_visible: 'Piilota salasana',
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
            auth_error: 'Autentikointitokenin vahvistamisessa tapahtui virhe',
            bulk_delete_content:
                'Oletko varma, että ${name} poistetaan? |||| Oletko varma että haluat poistaa %{smart_count} kohdetta?',
            bulk_delete_title: 'Poista %{name} |||| Poista %{smart_count} %{name} kohdetta',
            bulk_update_content:
                'Oletko varma, että ${name} päivitetään? |||| Oletko varma, että haluat päivittää %{smart_count} kohdetta?',
            bulk_update_title: 'Päivitä %{name} |||| Päivitä %{smart_count} %{name} kohdetta',
            clear_array_input: 'Oletko varma, että haluat tyhjentää koko listan?',
            delete_content: 'Oletko varma, että haluat poistaa tämän kohteen?',
            delete_title: 'Poista %{name} #%{id}',
            details: 'Yksityiskohdat',
            error: 'Ongelma havaittu eikä pyyntöäsi pystytty suorittamaan.',
            invalid_form: 'Lomake ei täytä vaatimuksia. Tarkista virheet.',
            loading: 'Sivua ladataan, ole hyvä ja odota hetki',
            no: 'Ei',
            not_found: 'Kirjoitit viallisen osoitteen tai seurasit viallista linkkiä.',
            yes: 'Kyllä',
            unsaved_changes: 'Joitakin muutoksia ei ole tallennettu. Haluatko varmasti hylätä ne?',
            access_denied: 'Sinulla ei ole oikeuksia katsoa tätä sivua',
            authentication_error: 'Autentikointipalvelin palautti virheen eikä tunnuksiasi voitu tarkistaa',
        },
        navigation: {
            clear_filters: 'Tyhjennä suodattimet',
            no_filtered_results: 'Yhtään kohdetta ei löytynyt nykyisillä suodattimilla.',
            no_results: 'Yhtään kohdetta ei löytynyt',
            no_more_results: '%{page}. sivu ylittää tulosten määrän. Yritä edellistä sivua.',
            page_out_of_boundaries: '%{page}. sivu on rajojen ulkopuolella',
            page_out_from_end: 'Olet jo viimeisellä sivulla',
            page_out_from_begin: 'Olet jo ensimmäisellä sivulla',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            partial_page_range_info: '%{offsetBegin}-%{offsetEnd} / %{offsetEnd}+',
            current_page: 'Sivu %{page}',
            page: 'Siirry sivulle %{page}',
            first: 'Ensimmäinen sivu',
            last: 'Viimeinen sivu',
            next: 'Seuraava sivu',
            previous: 'Edellinen sivu',
            page_rows_per_page: 'Rivejä sivua kohti:',
            skip_nav: 'Siirry sisältöön',
        },
        sort: {
            sort_by: "Järjestä %{order} '%{field}'-kentän mukaan",
            ASC: 'nousevasti',
            DESC: 'laskevasti',
        },
        auth: {
            auth_check_error: 'Kirjaudu sisään jatkaaksesi',
            user_menu: 'Profiili',
            username: 'Käyttäjätunnus',
            password: 'Salasana',
            sign_in: 'Kirjaudu sisään',
            sign_in_error: 'Kirjautuminen epäonnistui, ole hyvä ja yritä uudelleen',
            logout: 'Kirjaudu ulos',
        },
        notification: {
            updated: 'Kohde päivitetty |||| %{smart_count} kohdetta päivitetty',
            created: 'Kohde luotu',
            deleted: 'Kohde poistettu |||| %{smart_count} kohdetta poistettu',
            bad_item: 'Virheellinen kohde',
            item_doesnt_exist: 'Kohdetta ei ole olemassa',
            http_error: 'Virhe palvelimelle yhdistettäessä',
            data_provider_error: 'dataProvider virhe. Tarkista console lisätietojen saamiseksi.',
            i18n_error: 'Valitulle kielelle ei voitu ladata käännöstä',
            canceled: 'Toiminta peruutettu',
            logged_out: 'Istuntosi on päättynyt, ole hyvä kirjaudu uudelleen.',
            not_authorized: 'Sinulla ei ole lupaa käyttää tätä resurssia.',
            application_update_available: 'Uusi versio saatavilla.',
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
            unique: 'On oltava uniikki',
        },
        saved_queries: {
            label: 'Tallennetut kyselyt',
            query_name: 'Kyselyn nimi',
            new_label: 'Tallenna nykyinen kysely...',
            new_dialog_title: 'Tallenna kysely nimellä',
            remove_label: 'Poista tallennettu kysely',
            remove_label_with_name: 'Poista kysely "%{name}"',
            remove_dialog_title: 'Poistetaanko tallennettu kysely?',
            remove_message: 'Oletko varma, että haluat poistaa kyseisen kohteen tallennetuista kyselyistä?',
            help: 'Suodata listaa ja tallenna tämä kysely myöhempää käyttöä varten',
        },
        configurable: {
            customize: 'Mukauta',
            configureMode: 'Mukauta tätä sivua',
            inspector: {
                title: 'Tarkastelu',
                content: 'Vie hiiri elementin päälle mukauttaaksesi sitä',
                reset: 'Nollaa asetukset',
                hideAll: 'Piilota kaikki',
                showAll: 'Näytä kaikki',
            },
            Datagrid: {
                title: 'Taulukko',
                unlabeled: 'Nimetön kenttä: %{column}',
            },
            SimpleForm: {
                title: 'Lomake',
                unlabeled: 'Nimetön kenttä: %{input}',
            },
            SimpleList: {
                title: 'Lista',
                primaryText: 'Ensisijainen teksti',
                secondaryText: 'Toissijainen teksti',
                tertiaryText: 'Tertiäärinen teksti',
            },
        },
    },
};

export default finnishMessages;

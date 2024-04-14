// src/tonICP_frontend/src/pages/MainPage.jsx
// import { Button } from '@/components/ui/button'
import { Page, Section, Cell, Switch } from '@twa-dev/mark42'

export default function MainPage() {
    return (
        <div>
            <Page mode='secondary' >
            <Section
                description="Share your contacts with the community. It will help other members to reach you faster."
                header="Public contacts"
            >
                <Cell
                after={<Switch />}
                description="@Stambultsian"
                >
                Twitter
                </Cell>
                <Cell
                after={<Switch />}
                description="@artursupertramp"
                >
                Facebook
                </Cell>
                <Cell
                after={<Switch />}
                description="@ArthurStam"
                >
                Telegram
                </Cell>
            </Section>
            </Page>
            <h1>Main Page</h1>
        </div>
    )
}
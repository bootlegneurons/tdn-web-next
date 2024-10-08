import Image from 'next/image';
import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import { H1 } from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import SiteCTASection from '@/components/SiteCTASection/SiteCTASection';

import tdnHeroSamples from '@/public/tdn-hero-samples.webp';
import tdnFeatureImg from '@/public/pastel-princess-nail-design.webp';
import tdnLogoFull from '@/public/tdn-logo-full.svg';

import RootStructuredData from '../RootStructuredData';

export const metadata: Metadata = {
  title: 'Melbourne BIAB nail art, manicures & press-ons - The Dreamy Nails',
  description:
    "I'm creating unique hand-painted nail designs and press-ons from my private nail salon space in Melbourne",
};

export default function Home() {
  return (
    <>
      <RootStructuredData />
      <div className="grow">
        <Hero
          expanded
          title={<Image src={tdnLogoFull} alt="The Dreamy Nails" width={300} />}
          subtitle="BIAB nail art, manicures & press-ons - creating unique hand-painted nail designs from my private nail salon space in Melbourne."
          feature={
            <Image
              src={tdnHeroSamples}
              alt="Photos of beautiful hand-painted nail designs by Selina from The Dreamy Nails salon in Melbourne"
              priority
              quality={100}
              placeholder="blur"
              sizes="(max-width: 664px) calc(100vw - 64px), 600px"
            />
          }
        />

        <Container>
          <Section>
            <Section.Column doubleWidth>
              <H1>Welcome to The Dreamy Nails</H1>
              <p>
                Hello! I&apos;m Selina! I love turning ordinary nails into works of art.
              </p>
              <p>
                I&apos;m located in Melbourne, and will be re-opening soon in a conveniently-located salon space, close to public transport - details coming soon!
              </p>
              <p>Do you want to know more about my salon and my journey with nail art?</p>
              <ButtonLink href="/about" variant="subtle">
                Learn more about me
              </ButtonLink>
            </Section.Column>
            <Section.Column>
              <Image
                src={tdnFeatureImg}
                alt="Pastel princess-themed hand painted nail designs by The Dreamy Nails in Melbourne"
                width={350}
                height={350}
                className="mx-auto"
                sizes="(min-width: 440px) 350px, (min-width: 1040px) 310px, calc(95vw - 49px)"
              />
            </Section.Column>
          </Section>
        </Container>
        {/* FIXME: Issue #18. */}
        {/* <Section>
          <Section.Column>
            <H2 className="text-center">My latest nail art</H2>
            <SiteInstagramGallery />
          </Section.Column>
        </Section> */}
      </div>
      <SiteCTASection />
    </>
  );
}

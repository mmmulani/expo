import { css } from '@emotion/react';
import { theme, typography } from '@expo/styleguide';
import { spacing, breakpoints, borderRadius } from '@expo/styleguide-base';
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  DiscordIcon,
  DiscourseIcon,
  GithubIcon,
  RedditIcon,
  TwitterIcon,
} from '@expo/styleguide-icons';
import type { PropsWithChildren } from 'react';
import { Container, Row, ScreenClassProvider } from 'react-grid-system';

import DocumentationPage from '~/components/DocumentationPage';
import { AppJSBanner } from '~/ui/components/AppJSBanner';
import { APIGridCell, CommunityGridCell, GridCell, HomeButton } from '~/ui/components/Home';
import {
  APICameraIcon,
  APIListIcon,
  APIMapsIcon,
  APINotificationsIcon,
  CodecademyImage,
  CodecademyImageMasks,
  DevicesImage,
  DevicesImageMasks,
  OfficeHoursImage,
  QuickStartIcon,
  SnackImage,
  WhyImage,
} from '~/ui/components/Home/resources';
import { Terminal } from '~/ui/components/Snippet';
import { H1, RawH2, RawH3, P } from '~/ui/components/Text';

export const CellContainer = ({ children }: PropsWithChildren<object>) => (
  // https://github.com/sealninja/react-grid-system/issues/175
  <Container fluid style={{ paddingLeft: -15, paddingRight: -15, marginBottom: spacing[6] }}>
    {children}
  </Container>
);

const Description = ({ children }: PropsWithChildren<object>) => (
  <P css={css({ marginTop: spacing[1], marginBottom: spacing[3], color: theme.text.secondary })}>
    {children}
  </P>
);

const Home = () => {
  const { palette, background } = theme;
  return (
    <ScreenClassProvider>
      <DocumentationPage tocVisible={false} hideFromSearch>
        <div css={imageMasksContainerStyle}>
          <DevicesImageMasks />
          <CodecademyImageMasks />
        </div>
        <H1 css={docsTitleStyle}>Create amazing apps that run everywhere</H1>
        <Description>
          Build one JavaScript/TypeScript project that runs natively on all your users' devices.
        </Description>
        <AppJSBanner />
        <CellContainer>
          <Row>
            <GridCell xl={4} lg={12} css={quickStartCellStyle}>
              <div
                css={[
                  baseGradientStyle,
                  css({
                    background: `linear-gradient(${background.subtle} 15%, #21262d00 100%)`,
                  }),
                ]}
              />
              <div
                css={{
                  position: 'relative',
                  zIndex: 1,
                }}>
                <RawH2>
                  <QuickStartIcon /> Quick Start
                </RawH2>
                <br />
                <Terminal includeMargin={false} cmd={['$ npx create-expo-app my-app']} />
              </div>
            </GridCell>
            <GridCell
              xl={8}
              lg={12}
              css={[
                tutorialCellStyle,
                css({
                  borderColor: palette.blue7,
                  position: 'relative',
                  zIndex: 0,
                }),
              ]}>
              <div
                css={[
                  baseGradientStyle,
                  css({
                    background: `linear-gradient(${palette.blue4} 15%, #201d5200 100%)`,
                  }),
                ]}
              />
              <DevicesImage />
              <RawH2 css={css({ color: palette.blue12, zIndex: 1, position: 'relative' })}>
                Create a universal Android, iOS,
                <br />
                and web app
              </RawH2>
              <HomeButton
                className="hocus:bg-button-primary hocus:opacity-80"
                href="/tutorial/introduction/"
                rightSlot={<ArrowRightIcon className="icon-md" />}>
                Start Tutorial
              </HomeButton>
            </GridCell>
          </Row>
        </CellContainer>
        <RawH3>Learn more</RawH3>
        <Description>
          Try out Expo in minutes and learn how to get the most out of Expo.
        </Description>
        <CellContainer>
          <Row>
            <GridCell
              xl={6}
              lg={6}
              css={css({
                backgroundColor: palette.purple3,
                borderColor: palette.purple7,
              })}>
              <SnackImage />
              <RawH3 css={css({ color: palette.purple11 })}>Try Expo in your browser</RawH3>
              <P css={css({ color: palette.purple11, ...typography.fontSizes[14] })}>
                Expo’s Snack lets you try Expo
                <br />
                with zero local setup.
              </P>
              <HomeButton
                className="bg-palette-purple11 border-palette-purple11 text-palette-purple3 hocus:bg-palette-purple11 hocus:opacity-80"
                href="https://snack.expo.dev/"
                target="_blank"
                rightSlot={<ArrowUpRightIcon className="text-palette-purple3 icon-md" />}>
                Create a Snack
              </HomeButton>
            </GridCell>
            <GridCell
              xl={6}
              lg={6}
              css={css({
                backgroundColor: palette.orange4,
                borderColor: palette.orange8,
              })}>
              <CodecademyImage />
              <RawH3 css={css({ color: palette.orange11 })}>
                Learn Expo on
                <br />
                Codecademy
              </RawH3>
              <HomeButton
                className="bg-palette-orange11 border-palette-orange11 text-palette-orange4 hocus:bg-palette-orange11 hocus:opacity-80"
                css={css({
                  backgroundColor: palette.orange11,
                  color: palette.orange4,
                  '.dark-theme &': {
                    backgroundColor: palette.orange11,
                  },
                })}
                href="https://www.codecademy.com/learn/learn-react-native"
                target="_blank"
                rightSlot={<ArrowUpRightIcon className="text-palette-orange4 icon-md" />}>
                Start Course
              </HomeButton>
            </GridCell>
            <GridCell
              xl={6}
              lg={6}
              css={css({
                backgroundColor: palette.green3,
                borderColor: palette.green7,
              })}>
              <WhyImage />
              <RawH3 css={css({ color: palette.green11 })}>Why choose Expo?</RawH3>
              <P css={{ color: palette.green11, ...typography.fontSizes[14] }}>
                Learn the tradeoffs of
                <br />
                using Expo.
              </P>
              <HomeButton
                className="bg-palette-green11 border-palette-green11 text-palette-green2 hocus:bg-palette-green11 hocus:opacity-80"
                href="/introduction/faq"
                rightSlot={<ArrowRightIcon className="text-palette-green2 icon-md" />}>
                Read
              </HomeButton>
            </GridCell>
            <GridCell
              xl={6}
              lg={6}
              css={css({
                backgroundColor: palette.yellow3,
                borderColor: palette.yellow8,
              })}>
              <OfficeHoursImage />
              <RawH3 css={css({ color: palette.yellow11 })}>Join us for Office Hours</RawH3>
              <P css={css({ color: palette.yellow11, ...typography.fontSizes[14] })}>
                Get answers to your questions and
                <br />
                get advice from the Expo team.
              </P>
              <HomeButton
                className="bg-palette-yellow11 border-palette-yellow11 text-palette-yellow2 hocus:bg-palette-yellow11 hocus:opacity-80"
                href="https://us02web.zoom.us/meeting/register/tZcvceivqj0oHdGVOjEeKY0dRxCRPb0HzaAK"
                rightSlot={<ArrowUpRightIcon className="text-palette-yellow2 icon-md" />}>
                Register
              </HomeButton>
            </GridCell>
          </Row>
        </CellContainer>
        <RawH3>Explore APIs</RawH3>
        <Description>
          Expo supplies a vast array of SDK modules. You can also create your own.
        </Description>
        <CellContainer>
          <Row>
            <APIGridCell title="Maps" link="/versions/latest/sdk/map-view" icon={<APIMapsIcon />} />
            <APIGridCell
              title="Camera"
              link="/versions/latest/sdk/camera"
              icon={<APICameraIcon />}
            />
            <APIGridCell
              title="Notifications"
              link="/versions/latest/sdk/notifications"
              icon={<APINotificationsIcon />}
            />
            <APIGridCell title="View all APIs" link="/versions/latest/" icon={<APIListIcon />} />
          </Row>
        </CellContainer>
        <RawH3>Join the community</RawH3>
        <JoinTheCommunity />
      </DocumentationPage>
    </ScreenClassProvider>
  );
};

export function JoinTheCommunity() {
  return (
    <>
      <Description>See the source code, connect with others, and get connected.</Description>
      <CellContainer>
        <Row>
          <CommunityGridCell
            title="GitHub"
            description="View our SDK, submit a PR, or report an issue."
            link="https://github.com/expo/expo"
            icon={<GithubIcon className="icon-lg text-palette-white" />}
            css={communityCellStyle}
          />
          <CommunityGridCell
            title="Discord"
            description="Join our Discord and chat with other Expo users."
            link="https://chat.expo.dev"
            icon={<DiscordIcon className="icon-lg text-palette-white" />}
            iconBackground="#3131E8"
            css={communityCellStyle}
          />
        </Row>
        <Row>
          <CommunityGridCell
            title="Twitter"
            description="Follow Expo on Twitter for news and updates."
            link="https://twitter.com/expo"
            icon={<TwitterIcon className="icon-lg text-palette-white" />}
            iconBackground="#1E8EF0"
            css={communityCellStyle}
          />
          <CommunityGridCell
            title="Forums"
            description="Ask or answer a question on the forums."
            link="https://forums.expo.dev/"
            icon={<DiscourseIcon className="icon-lg text-palette-white" />}
            css={communityCellStyle}
          />
        </Row>
        <Row>
          <CommunityGridCell
            title="Reddit"
            description="Get the latest on r/expo."
            link="https://www.reddit.com/r/expo"
            icon={<RedditIcon className="icon-lg text-palette-white" />}
            iconBackground="#FC471E"
            css={communityCellStyle}
          />
        </Row>
      </CellContainer>
    </>
  );
}

const docsTitleStyle = css({
  marginTop: 0,
  marginBottom: spacing[2],
  paddingBottom: 0,
  borderBottomWidth: 0,
  fontWeight: '900',
});

const baseGradientStyle = css({
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: borderRadius.lg,
});

const quickStartCellStyle = css({
  backgroundColor: theme.background.subtle,
  backgroundImage: 'url("/static/images/home/QuickStartPattern.svg")',
  backgroundBlendMode: 'multiply',
  minHeight: 220,

  [`@media screen and (max-width: ${breakpoints.medium}px)`]: {
    minHeight: 200,
  },
});

const tutorialCellStyle = css({
  backgroundColor: theme.palette.blue4,
  backgroundImage: 'url("/static/images/home/TutorialPattern.svg")',
  backgroundBlendMode: 'multiply',
  minHeight: 220,

  [`@media screen and (max-width: ${breakpoints.medium}px)`]: {
    minHeight: 200,
  },
});

const imageMasksContainerStyle = css({
  height: 0,
});

const communityCellStyle = css({
  minHeight: 'unset',
});

export default Home;

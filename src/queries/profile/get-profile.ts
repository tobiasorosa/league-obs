import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
	query Profile($name: String!, $region: String!) {
		profile(name: $name, region: $region) {
			summoner {
				id
				puuid
				name
				profileIconId
				summonerLevel
				accountId
			}
			summonerRank {
				queueType
				tier
				rank
				leaguePoints
				wins
				losses
			}
			firstMatchesData {
				metadata {
					participants
					matchId
				}
				info {
					queueId
					teams {
						bans {
							championId
							pickTurn
						}
						objectives {
							baron {
								first
								kills
							}
							champion {
								first
								kills
							}
							dragon {
								first
								kills
							}
							inhibitor {
								first
								kills
							}
							riftHerald {
								first
								kills
							}
							tower {
								first
								kills
							}
						}
						teamId
						win
					}
					gameDuration
					gameEndTimestamp
					participants {
						assists
						kills
						deaths
						totalDamageDealtToChampions
						totalMinionsKilled
						champLevel
						championTransform
						championName
						wardsPlaced
						detectorWardsPlaced
						goldEarned
						largestMultiKill
						item0
						item1
						item2
						item3
						item4
						item5
						item6
						itemsPurchased
						puuid
						role
						summonerId
						summonerName
						teamPosition
						teamId
						summoner1Id
						summoner2Id
						perks {
							styles {
								description
								selections {
									perk
								}
								style
							}
						}
					}
				}
			}
		}
	}
`;

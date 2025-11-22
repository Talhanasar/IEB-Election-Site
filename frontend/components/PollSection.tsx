"use client"

import { useState } from "react"
import { BarChart3, CheckCircle2 } from "lucide-react"
import { candidateData } from "@/data/candidateData"

export default function PollSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  // Sample poll data - in production, this would come from the backend
  const pollOptions = [
    { id: "support", label: "I support BNP's vision for Bangladesh", votes: 1247 },
    { id: "considering", label: "I'm considering supporting BNP", votes: 856 },
    { id: "neutral", label: "I'm neutral / undecided", votes: 432 },
    { id: "other", label: "I support another party", votes: 289 }
  ]

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = (optionId: string) => {
    if (!hasVoted) {
      setSelectedOption(optionId)
      setHasVoted(true)
    }
  }

  const getPercentage = (votes: number) => {
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0
  }

  return (
    <section id="poll" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-900 text-sm font-semibold mb-4">
              <BarChart3 className="w-4 h-4" />
              Public Opinion
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              What's Your Opinion?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Share your thoughts about {candidateData.party.name} and help us understand the public sentiment.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                Do you support {candidateData.party.abbreviation}'s vision for Bangladesh?
              </h3>
              <p className="text-stone-600 text-sm">
                {totalVotes.toLocaleString()} people have participated in this poll
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {pollOptions.map((option) => {
                const percentage = getPercentage(option.votes)
                const isSelected = selectedOption === option.id
                const showResults = hasVoted

                return (
                  <div
                    key={option.id}
                    className={`relative rounded-lg border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "border-green-600 bg-green-50"
                        : showResults
                        ? "border-stone-300 bg-white"
                        : "border-stone-300 bg-white hover:border-green-400 hover:bg-green-50/50"
                    }`}
                    onClick={() => handleVote(option.id)}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="flex items-center gap-3 cursor-pointer flex-1">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? "border-green-600 bg-green-600"
                                : "border-stone-400"
                            }`}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-stone-900">{option.label}</span>
                        </label>
                        {showResults && (
                          <span className="text-sm font-bold text-stone-700 ml-4">
                            {percentage}%
                          </span>
                        )}
                      </div>
                      {showResults && (
                        <div className="mt-2">
                          <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                isSelected
                                  ? "bg-linear-to-r from-green-600 to-green-700"
                                  : "bg-stone-400"
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-stone-500 mt-1">
                            {option.votes.toLocaleString()} votes
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {!hasVoted && (
              <div className="text-center">
                <p className="text-sm text-stone-500 mb-4">
                  Select an option above to cast your vote
                </p>
              </div>
            )}

            {hasVoted && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-900 font-semibold">
                  ✓ Thank you for participating! Your vote has been recorded.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

